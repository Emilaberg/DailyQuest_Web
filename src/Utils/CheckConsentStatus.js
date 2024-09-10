src / utils / checkConsentStatus.js;
export const checkCookieConsent = () => {
  return localStorage.getItem("cookieConsent");
};
