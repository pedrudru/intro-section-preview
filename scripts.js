document.addEventListener("DOMContentLoaded", function () {

    const featuresItem = document.getElementById("features-item");
    const featuresDropdown = document.getElementById("features-dropdown");
    const arrowUp = document.getElementById("arrow-up")
    const arrowDown = document.getElementById("arrow-down")

    featuresItem.addEventListener('click', () => {
        featuresDropdown.classList.toggle('show-dropdown')
        arrowUp.classList.toggle('show-arrow-up')
        arrowDown.classList.toggle('unshow-arrow-down')
    })

    const companyItem = document.getElementById("company-item");
    const companyDropdown = document.getElementById("company-dropdown");
    const arrowUpCompany = document.getElementById("arrow-up-company")
    const arrowDownCompany = document.getElementById("arrow-down-company")

    companyItem.addEventListener('click', () => {
        companyDropdown.classList.toggle('show-dropdown')
        arrowUpCompany.classList.toggle('show-arrow-up')
        arrowDownCompany.classList.toggle('unshow-arrow-down')
    })

    const mobileItem = document.getElementById("mobile-item");
    const mobileDropdown = document.getElementById("mobile-dropdown");
    const closeButton = document.getElementById("icon-close-menu");

    mobileItem.addEventListener('click', () => {
        mobileDropdown.style.display = "flex"
    })

    closeButton.addEventListener('click', () => {
        mobileDropdown.style.display = "none"
    })

    const featuresMobileItem = document.getElementById("features-mobile-item")
    const featuresMobileDropdown = document.getElementById("features-mobile-dropdown")
    const companyMobileItem = document.getElementById("company-mobile-item")
    const companyMobileDropdown = document.getElementById("company-mobile-dropdown")

    featuresMobileItem.addEventListener('click', () => {
        featuresMobileDropdown.classList.toggle('show-dropdown')
    })

    companyMobileItem.addEventListener('click', () => {
        companyMobileDropdown.classList.toggle('show-dropdown')
    })



})