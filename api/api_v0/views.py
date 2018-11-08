from django.http import Http404
from django.utils import timezone
from datetime import date, timedelta, datetime
from django.shortcuts import render
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, mixins, generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

# from news.models import NewsModel
# from .serializers import NewsSerializer

from header.models import HeaderModel
from pages.models import PagesModel
from section_one.models import SectionOneModel
from section_two.models import SectionTwoModel
from section_three.models import SectionThreeModel
from section_four.models import SectionFourModel
from section_fife.models import SectionFifeModel, PartnerModel
from section_six.models import SectionSixModel, PhoneModel
from .serializers import ( 
  PagesSerializer, HeaderSerializer, SectionOneSerializer,
  SectionTwoSerializer, SectionThreeSerializer, SectionFourSerializer,
  SectionFifeSerializer, SectionSixSerializer, PartnerSerializer, PhoneSerializer
)

# Create your views here.
class PagesView(generics.ListAPIView):
  queryset = PagesModel.objects.all()
  serializer_class = PagesSerializer

class PhoneView(generics.ListAPIView):
  queryset = PhoneModel.objects.all()
  serializer_class = PhoneSerializer

class PartnerView(generics.ListAPIView):
  queryset = PartnerModel.objects.all()
  serializer_class = PartnerSerializer

class SectionSixView(generics.ListAPIView):
  queryset = SectionSixModel.objects.all()
  serializer_class = SectionSixSerializer

class SectionFifeView(generics.ListAPIView):
  queryset = SectionFifeModel.objects.all()
  serializer_class = SectionFifeSerializer

class SectionFourView(generics.ListAPIView):
  queryset = SectionFourModel.objects.all()
  serializer_class = SectionFourSerializer

class SectionThreeView(generics.ListAPIView):
  queryset = SectionThreeModel.objects.all()
  serializer_class = SectionThreeSerializer

class SectionTwoView(generics.ListAPIView):
  queryset = SectionTwoModel.objects.all()
  serializer_class = SectionTwoSerializer

class SectionOneView(generics.ListAPIView):
  queryset = SectionOneModel.objects.all()
  serializer_class = SectionOneSerializer

class HeaderView(generics.ListAPIView):
  queryset = HeaderModel.objects.all()
  serializer_class = HeaderSerializer


# class CreateBalanceChargeView(generics.CreateAPIView):
#   serializer_class = BalanceChargeSerializer
#   queryset = BalanceCharge.objects.all()

#   def perform_create(self, serializer, **kwargs):
#     balance_charge = serializer.save()

#     try:
#       user = CustomUser.objects.filter(id = self.request.data['user_id'])[0]
#       amount = float(self.request.data['rub-value'])
#       agregator = str(self.request.data['payed_paysys'])
#       user.account_resource += amount
#     except:
#       raise Http404

#     if user.partner:
#       user.partner.account_resource += amount * 0.05
#       user.partner.save()

#     user.save()
#     balance_charge.amount = amount
#     balance_charge.agregator = agregator
#     balance_charge.user = user
#     balance_charge.save()

# class BalanceChargeView(generics.ListAPIView):
#   serializer_class = BalanceChargeSerializer

#   def get_queryset(self):
#     user = CustomUser.objects.filter(username=self.request.query_params.get('username'))[0]
#     balance_charge_list = BalanceCharge.objects.filter(user=user)
#     return balance_charge_list

# class GetAllDepositsInfoView(APIView):
  
#   def get(self, request, format=None):
#     user = CustomUser.objects.filter(username=self.request.query_params.get('username'))[0]
#     info = {'deposits': 0, 'payed_off': 0, 'active_deposits': 0, 'amount': 0}
#     deposits = DepositsModel.objects.filter(user=user)
#     payed_off = PayOffModel.objects.filter(user=user)
#     referals = CustomUser.objects.filter(partner=user)
#     for item in deposits:
#       info['deposits'] += item.amount
#       if item.is_active:
#         info['active_deposits'] += item.amount
#     for item in payed_off:
#       info['payed_off'] += item.amount
#     for referal in referals:
#       deposits = DepositsModel.objects.filter(user = referal)
#       for item in deposits:
#         info['amount'] += (item.amount * 0.05)

#     return Response(info)

# class UserView(generics.RetrieveAPIView):
#   permission_classes = (IsAuthenticated, )
#   serializer_class = UserSerializer
#   lookup_field = 'username'

#   def get_queryset(self):
#     userResponse = CustomUser.objects.all()
#     user = CustomUser.objects.filter(username=self.request.query_params.get('username'))[0]
#     deposit_list = DepositsModel.objects.filter(user=user)
#     for item in deposit_list:
#       profit = ProfitModel.objects.filter(title = item.profit)[0]
#       duration = profit.duration
#       endDate = item.date_added + timedelta(days=duration)
#       if item.is_active is True and endDate <= timezone.now():
#         item.is_active = False
#         item.save()
#         user.account_resource += item.amount * profit.percent * 0.01
#         user.save()
    
#     return userResponse