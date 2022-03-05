from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from django.conf import settings

from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode

User = get_user_model()

subject = "ユーザー登録確認"
message_template = """
ご登録ありがとうございます。
本サイトは、引き継ぎドキュメントを作成するためのウェブアプリケーションとなります。
以下のURLをクリックして登録を完了してください。
"""

def get_activate_url(user):
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = default_token_generator.make_token(user)
    return settings.FRONTEND_URL + "activate/{}/{}".format(uid,token)

class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = ("username", "email", "password","password2")

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data["email"]

        user.is_active = False

        if commit :
            user.save()
            activate_url = get_activate_url(user)
            message = message_template + activate_url
            user.email_user(subject, message)
        return user
    
    def activate_user(uidb64, token):
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except Exception:
            return False

        if default_token_generator.check_token(user,token):
            user.is_active = True
            user.save()
            return True
    return False