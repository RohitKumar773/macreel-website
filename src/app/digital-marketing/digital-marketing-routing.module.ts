import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { EmailMarketingComponent } from './email-marketing/email-marketing.component';
import { FacebookPromotionComponent } from './facebook-promotion/facebook-promotion.component';
import { GoogleAdwordCompanyComponent } from './google-adword-company/google-adword-company.component';
import { GoogleAdwordPromotionComponent } from './google-adword-promotion/google-adword-promotion.component';
import { GoogleAdwordServicesComponent } from './google-adword-services/google-adword-services.component';
import { GoogleBrandingServiceComponent } from './google-branding-service/google-branding-service.component';
import { GoogleMarketingServiceComponent } from './google-marketing-service/google-marketing-service.component';
import { GooglePaidPromotionComponent } from './google-paid-promotion/google-paid-promotion.component';
import { GooglePlusPromotionComponent } from './google-plus-promotion/google-plus-promotion.component';
import { GooglePromotionServiceComponent } from './google-promotion-service/google-promotion-service.component';
import { GoogleRankingServiceComponent } from './google-ranking-service/google-ranking-service.component';
import { GoogleShopingAdPromotionComponent } from './google-shoping-ad-promotion/google-shoping-ad-promotion.component';
import { InstagramPromotionComponent } from './instagram-promotion/instagram-promotion.component';
import { InternetMarketingComponent } from './internet-marketing/internet-marketing.component';
import { LinkedinPromotionComponent } from './linkedin-promotion/linkedin-promotion.component';
import { LocalWebsitePromotionComponent } from './local-website-promotion/local-website-promotion.component';
import { OnlineWebsitePromotionComponent } from './online-website-promotion/online-website-promotion.component';
import { PromoteBusinessOnGoogleComponent } from './promote-business-on-google/promote-business-on-google.component';
import { SeoWebsitePromotionComponent } from './seo-website-promotion/seo-website-promotion.component';
import { TwiterPromotionComponent } from './twiter-promotion/twiter-promotion.component';
import { WebPromotionCompanyComponent } from './web-promotion-company/web-promotion-company.component';
import { WebsitePromotionCompanyComponent } from './website-promotion-company/website-promotion-company.component';
import { GoogleSearchPromoComponent } from './google-search-promo/google-search-promo.component';

const routes: Routes = [
  { path: '', component: DigitalMarketingComponent },
  { path: 'digitalmark', component: DigitalMarketingComponent },
  { path: 'email_marketing', component: EmailMarketingComponent },
  { path: 'facebook_promotion', component: FacebookPromotionComponent },
  { path: 'google_adword_company', component: GoogleAdwordCompanyComponent },
  { path: 'google_adword_prmo', component: GoogleAdwordPromotionComponent },
  { path: 'google_adword_service', component: GoogleAdwordServicesComponent },
  { path: 'google_search_promo', component: GoogleSearchPromoComponent },
  {
    path: 'google_branding_service',
    component: GoogleBrandingServiceComponent,
  },
  {
    path: 'goole_marketing_service',
    component: GoogleMarketingServiceComponent,
  },
  { path: 'google_paid_promo', component: GooglePaidPromotionComponent },
  { path: 'google_plus_promo', component: GooglePlusPromotionComponent },
  { path: 'google_promo_service', component: GooglePromotionServiceComponent },
  { path: 'google_ranking_service', component: GoogleRankingServiceComponent },
  { path: 'google_shoping_ad', component: GoogleShopingAdPromotionComponent },
  { path: 'instagram_promotion', component: InstagramPromotionComponent },
  { path: 'internet_marketing', component: InternetMarketingComponent },
  { path: 'linkedin_promo', component: LinkedinPromotionComponent },
  { path: 'local_web_promo', component: LocalWebsitePromotionComponent },
  { path: 'online_web_promo', component: OnlineWebsitePromotionComponent },
  {
    path: 'promote_business_google',
    component: PromoteBusinessOnGoogleComponent,
  },
  { path: 'seo_website_promo', component: SeoWebsitePromotionComponent },
  { path: 'twiter_promo', component: TwiterPromotionComponent },
  { path: 'web_promotion_comp', component: WebPromotionCompanyComponent },
  { path: 'website_promo_comp', component: WebsitePromotionCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalMarketingRoutingModule {}
