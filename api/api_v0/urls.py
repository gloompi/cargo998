from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from .views import *

router = DefaultRouter()
# router.register(r'news', NewsItemViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
  url(r'^', include(router.urls)),
  url(r'^auth/', views.obtain_auth_token, name='get_auth_token'),
  url(r'^header/$', HeaderView.as_view(), name='header'),
  url(r'^section-1/$', SectionOneView.as_view(), name='section-1'),
  url(r'^section-2/$', SectionTwoView.as_view(), name='section-2'),
  url(r'^section-3/$', SectionThreeView.as_view(), name='section-3'),
  url(r'^section-4/$', SectionFourView.as_view(), name='section-4'),
  url(r'^section-5/$', SectionFifeView.as_view(), name='section-5'),
  url(r'^section-6/$', SectionSixView.as_view(), name='section-6'),
  url(r'^partners/$', PartnerView.as_view(), name='partners'),
  url(r'^phones/$', PhoneView.as_view(), name='phone'),
  url(r'^pages/$', PagesView.as_view(), name='pages'),
  url(r'^gallery/$', GalleryView.as_view(), name='gallery'),
]