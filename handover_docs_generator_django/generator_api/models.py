from email.policy import default
from tabnanny import verbose
from unicodedata import name
from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django_mysql.models import ListCharField

# Create your models here.

class CustomUserManager(UserManager):
    # 参考資料URL:
    # https://rightcode.co.jp/blog/become-engineer/django-diary-app-make-approval-function#:~:text=Django%20%E3%83%86...-,Django%20%E3%81%AE%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BF%E8%AA%8D%E8%A8%BC%E6%A9%9F%E8%83%BD,%E7%9A%84%E3%81%AB%E7%B5%84%E3%81%BF%E8%BE%BC%E3%81%BE%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82

    use_in_migrations = True

    def _create_user(self, email, username, password, **extra_fields):
        """
        一般ユーザー/管理ユーザーの共通処理
        param: email string Eメール
        param: username string ユーザー名
        param: password string パスワード
        param: **extra_fields array その他のパラメータ

        return: user ユーザー情報
        """
        if not email:
        # メールアドレスが入力されていない場合
            raise ValueError('Emailが入力されていません')
        if not username:
        # ユーザー名が入力されていない場合
            raise ValueError('ユーザー名が入力されていません')
        
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_user(self, username, email=None, password=None, **extra_fields):
        """
        一般ユーザー作成する処理
        param: email string Eメール ※デフォルトNone
        param: username string ユーザー名
        param: password string パスワード ※デフォルトNone
        param: **extra_fields array その他のパラメータ
        """
        if not email:
        # メールアドレスが入力されていない場合
            raise ValueError('Emailが入力されていません')
        if not username:
        # ユーザー名が入力されていない場合
            raise ValueError('ユーザー名が入力されていません')
        
        # その他のパラメータを追加
        return self._create_user(email=email, username=username, password=password, **extra_fields)

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        """
        管理ユーザー作成する処理
        param: email string Eメール ※デフォルトNone
        param: username string ユーザー名
        param: password string パスワード ※デフォルトNone
        param: **extra_fields array その他のパラメータ
        """
        return self._create_user(email=email, username=username, password=password, **extra_fields)


class CustomUser(AbstractUser):
    objects = CustomUserManager()
    is_authenticated = models.BooleanField(name="Auth status", default=False)
    is_login = models.BooleanField(name="Login status", default=False)
    
    def __str__(self):
        return self.username


class Document(models.Model):
    title = models.TextField(name="title", null=False)
    genre = models.CharField(name="genre", max_length=255)
    author = models.CharField(name="author", max_length=255)
    date = models.TimeField(name="date", null=False)
    purpose = models.TextField(name="purpose", null=False)
    overview = models.TextField(name="overview", null=False)
    dev_environment = ListCharField(
                      models.CharField(max_length=255), max_length=(6 * 11))
    image = models.ImageField(upload_to='')
    references = ListCharField(
                      models.CharField(max_length=255), max_length=(6 * 11))
    
    def __str__(self):
        return self.title
