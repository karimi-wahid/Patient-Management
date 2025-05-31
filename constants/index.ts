export const GenderOptions = ["male", "female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Khulil Ahmad",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Maryam Nazir",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Hassan Gul",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Ahmad Zahir",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Narges Ahmadi",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Omar Jan",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Lailai Khorasani",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Fawzia Shirazi",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Haroon Farahi",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
