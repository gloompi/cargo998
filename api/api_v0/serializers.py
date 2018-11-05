from django.contrib.auth.models import User
from rest_framework import serializers

from header.models import HeaderModel
from pages.models import PagesModel
from section_one.models import SectionOneModel
from section_two.models import SectionTwoModel
from section_three.models import SectionThreeModel
from section_four.models import SectionFourModel
from section_fife.models import SectionFifeModel, PartnerModel
from section_six.models import SectionSixModel, PhoneModel

# Additional serializers
class PhoneSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = PhoneModel
    fields = ('phone', 'section')

class SectionSixSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = SectionSixModel
    fields = ('title', 'description', 'address', 'email')

class PartnerSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = PartnerModel
    fields = ('image', 'section')

class SectionFifeSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = SectionFifeModel
    fields = ('title', 'descr')

class SectionFourSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = SectionFourModel
    fields = ('title', 'descr')

class SectionThreeSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = SectionThreeModel
    fields = ('slug', 'title', 'content', 'cover_pic')

class SectionTwoSerializer(serializers.ModelSerializer):

  class Meta:
    model = SectionTwoModel
    fields = ('slug', 'title', 'description')

class SectionOneSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = SectionOneModel
    fields = ('title', 'longtitle', 'description')

class HeaderSerializer(serializers.ModelSerializer):

  class Meta:
    model = HeaderModel
    fields = ('logo', )

class PagesSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = PagesModel
    fields = ('title', )

# class CreateUserSerializer(serializers.ModelSerializer):
  
#   class Meta:
#     model = CustomUser
#     fields = (
#       'username',
#       'password',
#       'first_name',
#       'last_name',
#       'email',
#       'partner',
#     )
    
#   def create(self, validated_data):
#     user = CustomUser(email=validated_data['email'], username=validated_data['username'])
#     user.set_password(validated_data['password'])
#     user.save()
#     return user