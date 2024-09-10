src / utils / CheckConsentStatus.js;
export const checkCookieConsent = () => {
  return localStorage.getItem("cookieConsent");
};
