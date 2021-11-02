export default class Driver {

    constructor(zipCode, firstName, lastName, birthDate, address, currentCompany, email, milesFrequency, miles, haveInsurance,
                ownOrRent, whyShopping, gender, maritalStatus, creditScore, education, insuranceDuration,
                bodilyInjuryLimits, accidents, saveToNext) {

        this.zipCode = zipCode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.currentCompany = currentCompany;
        this.email = email;
        this.milesFrequency = milesFrequency;
        this.miles = miles;
        this.haveInsurance = haveInsurance;
        this.ownOrRent = ownOrRent;
        this.whyShopping = whyShopping;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
        this.creditScore = creditScore;
        this.education = education;
        this.insuranceDuration = insuranceDuration;
        this.bodilyInjuryLimits = bodilyInjuryLimits;
        this.accidents = accidents;
        this.saveToNext = saveToNext;
    }
}