import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export const contactDetails: { label: string; content: string }[] = [
  { label: "Email", content: "support@solus.com" },
  { label: "Phone", content: "+1 (123) 456-7890" },
  { label: "Address", content: "123 Wellness Way, Calm City, CA 90210" },
];

export const contactIcons: IconDefinition[] = [
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
];
