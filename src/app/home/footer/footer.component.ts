import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private route:Router
  ){}

  scrollOnHome() {
    this.route.navigate(['/home']);
    scroll(0, 0);
  }
  scrollOnAbout() {
    this.route.navigate(['/home/pages']);
    scroll(0, 0);
  }
  scrollOnDirector() {
    this.route.navigate(['/home/pages/directorMsg']);
    scroll(0, 0);
  }
  scrollOnTeam() {
    this.route.navigate(['/home/pages/ourteam']);
    scroll(0, 0);
  }
  scrollOnOrganization() {
    this.route.navigate(['/home/pages/orgStructure']);
    scroll(0, 0);
  }
  scrollOnVision() {
    this.route.navigate(['/home/pages/visson']);
    scroll(0, 0);
  }
  scrollOnWebdesign() {
    this.route.navigate(['/home/webdesign/webdesign']);
    scroll(0, 0);
  }
  scrollOnEcommerce() {
    this.route.navigate(['/home/webdesign/ecommerceWeb']);
    scroll(0, 0);
  }
  //
  scrollOnResponsiveWeb() {
    this.route.navigate(['/home/webdesign/responsiveWeb']);
    scroll(0, 0);
  }
  scrollOnStaticWeb() {
    this.route.navigate(['/home/webdesign/staticWeb']);
    scroll(0, 0);
  }
  scrollOnDynamicWeb() {
    this.route.navigate(['/home/webdesign/dynamicWeb']);
    scroll(0, 0);
  }
  scrollOnCustomWeb() {
    this.route.navigate(['/home/webdesign/customWeb']);
    scroll(0, 0);
  }
  scrollOnReesign() {
    this.route.navigate(['/home/webdesign/webRedesign']);
    scroll(0, 0);
  }
  scrollOnSeoWeb() {
    this.route.navigate(['/home/webdesign/seoWeb']);
    scroll(0, 0);
  }
  scrollOnTop() {
    scroll(0, 0);
  }
  scrollOnWebDev() {
    this.route.navigate(['/home/webdevelopment/webDeve']);
    scroll(0, 0);
  }
  scrollOnPortalWeb() {
    this.route.navigate(['/home/webdevelopment/portalWeb']);
    scroll(0, 0);
  }
  scrollOnCustomWebdev() {
    this.route.navigate(['/home/webdevelopment/custom_web']);
    scroll(0, 0);
  }
  scrollOnCmsWeb() {
    this.route.navigate(['/home/webdevelopment/cms_web']);
    scroll(0, 0);
  }
  scrollOnSoftwareDev() {
    this.route.navigate(['/home/softwaredevelopment/softwaredev']);
    scroll(0, 0);
  }
  scrollOnCrm() {
    this.route.navigate(['/home/softwaredevelopment/crm']);
    scroll(0, 0);
  }
  scrollOnMobApp() {
    this.route.navigate(['/home/mobiledevelopment/mobile_app']);
  }
  scrollOnAndroid(){
    this.route.navigate(['/home/mobiledevelopment/android']);
    scroll(0,0);
  }
  scrollOnIos(){
    this.route.navigate(['/home/mobiledevelopment/ios']);
    scroll(0,0);
  }
  scrollOnHybrid(){
    this.route.navigate(['/home/mobiledevelopment/hybrid']);
    scroll(0,0);
  }
  scrollOnSEO(){
    this.route.navigate(['/home/seo/seo_opt']);
    scroll(0,0);
  }
  scrillOnPageOpt(){
    this.route.navigate(['/home/seo/onpage']);
    scroll(0,0);
  }
  scrillOnOffPage(){
    this.route.navigate(['/home/seo/offpage']);
    scroll(0,0);
  }
  scrillOnLinkBuild(){
    this.route.navigate(['/home/seo/link_building']);
    scroll(0,0);
  }
  scrillOnAppStore(){
    this.route.navigate(['/home/seo/appstore']);
    scroll(0,0);
  }
  scrillOnEcommerceSeo(){
    this.route.navigate(['/home/seo/ecommerce']);
    scroll(0,0);
  }
  scrillOnLocalSeo(){
    this.route.navigate(['/home/seo/local_seo']);
    scroll(0,0);
  }
  scrillOnTechnicalSeo(){
    this.route.navigate(['/home/seo/technicalseo']);
    scroll(0,0);
  }
  scrillOnVideoSeo(){
    this.route.navigate(['/home/seo/videoseo']);
    scroll(0,0);
  }
  scrollOnDigital(){
    this.route.navigate(['/home/digitalmarketing/digitalmark']);
    scroll(0,0);
  }
  scrollOnEmailMkt(){
    this.route.navigate(['/home/digitalmarketing/email_marketing']);
    scroll(0,0);
  }
  scrollOnInternet(){
    this.route.navigate(['/home/digitalmarketing/internet_marketing']);
    scroll(0,0);
  }
  scrollOnGPromo(){
    this.route.navigate(['/home/digitalmarketing/google_promo_service']);
    scroll(0,0);
  }
  scrollOnGRank(){
    this.route.navigate(['/home/digitalmarketing/google_ranking_service']);
    scroll(0,0);
  }
  scrollOnGbrand(){
    this.route.navigate(['/home/digitalmarketing/google_branding_service']);
    scroll(0,0);
  }
  scrollOnGAdword(){
    this.route.navigate(['/home/digitalmarketing/google_adword_prmo']);
    scroll(0,0);
  }
  scrollOnGadwordComp(){
    this.route.navigate(['/home/digitalmarketing/google_adword_company']);
    scroll(0,0);
  }
  scrollOnAdwordService(){
    this.route.navigate(['/home/digitalmarketing/google_adword_service']);
    scroll(0,0);
  }
  scrollOnWebPromo(){
    this.route.navigate(['/home/digitalmarketing/online_web_promo']);
    scroll(0,0);
  }
  scrollOnWebProComp(){
    this.route.navigate(['/home/digitalmarketing/website_promo_comp']);
    scroll(0,0);
  }
  scrollOnPromoteBusiness(){
    this.route.navigate(['/home/digitalmarketing/promote_business_google']);
    scroll(0,0);
  }
  scrollOnPaidPromo(){
    this.route.navigate(['/home/digitalmarketing/google_paid_promo']);
    scroll(0,0);
  }
  scrollOnSearchPromo(){
    this.route.navigate(['/home/digitalmarketing/google_search_promo']);
    scroll(0,0);
  }
  scrollOnWPromo(){
    this.route.navigate(['/home/digitalmarketing/web_promotion_comp']);
    scroll(0,0);
  }
  scrollOnSEoPromo(){
    this.route.navigate(['/home/digitalmarketing/seo_website_promo']);
    scroll(0,0);
  }
  scrollOnLocalWebPromo(){
    this.route.navigate(['/home/digitalmarketing/local_web_promo']);
    scroll(0,0);
  }
  scrollOnShopAd(){
    this.route.navigate(['/home/digitalmarketing/google_shoping_ad']);
    scroll(0,0);
  }
  scrollOnGMS(){
    this.route.navigate(['/home/digitalmarketing/goole_marketing_service']);
    scroll(0,0);
  }
  scrollOnFbPromo(){
    this.route.navigate(['/home/digitalmarketing/facebook_promotion']);
    scroll(0,0);
  }
  scrollOnPlusPromo(){
    this.route.navigate(['/home/digitalmarketing/google_plus_promo']);
    scroll(0,0);
  }
  scrollOnInstaPromo(){
    this.route.navigate(['/home/digitalmarketing/instagram_promotion']);
    scroll(0,0);
  }
  scrollOnTwiterPromo(){
    this.route.navigate(['/home/digitalmarketing/twiter_promo']);
    scroll(0,0);
  }
  scrollOnLinkedPromo(){
    this.route.navigate(['/home/digitalmarketing/linkedin_promo']);
    scroll(0,0);
  }
  scrollOnBlog(){
    this.route.navigate(['/home/pages/blogs']);
    scroll(0,0);
  }
  scrollOnContact(){
    this.route.navigate(['/home/pages/contact']);
    scroll(0,0);
  }
  scrollOnPolicy(){
    this.route.navigate(['/home/pages/privacy']);
    scroll(0,0);
  }
  scrollOnTerms(){
    this.route.navigate(['/home/pages/terms']);
    scroll(0,0);
  }

}
