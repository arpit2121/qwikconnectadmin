import React from "react";
import LinkBar from "../../dashboard/jobposting/LinkBar";
import CustomAllTypography from "../../../components/typography/CustomTypograpgy";
import Footer from "../components/Footer";
import CustomContainer from "../../../components/structure/CustomContainer";
import Navbar from "../../../components/structure/admin/Navbar";

const PrivacyPolicy = () => {
  const data = [
    {
      heading: "Introduction",
      name: [
        `This Privacy Policy governs the manner in which Qwikconnect.io collects, uses, maintains, and discloses information collected from users (hereinafter, "Users") of the https://qwikconnect.io website and its subdomains (hereinafter, "Website"). This Privacy Policy applies to the Website and all products and services offered by Qwikconnect.io.`,
      ],
    },
    {
      heading: " Information Collection",
      name: [
        `Personal Identification Information:
      We may collect personal identification information from Users when they visit our Website, register an account, or engage in other activities on the Website. This information may include names, email addresses, and contact details.`,
        `Non-Personal Identification Information:
      We may collect non-personal identification information about Users whenever they interact with our Website. Non-personal identification information may include browser name, type of computer, and technical information about Users' means of connection to our Website.`,
      ],
    },
    {
      heading: "Information Use",
      name: [
        `To Improve User Experience:
      We may use the information Users provide to improve our services, customer support, and overall user experience.`,
        `To Personalize User Experience:
      We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Website.`,
        `To Improve Customer Service:
      Information you provide helps us respond to your customer service requests and support needs more effectively`,
      ],
    },
    {
      heading: "Data Protection",
      name: [
        `Data Security:
      We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our Website.`,
      ],
    },
    {
      heading: "Sharing Personal Information",
      name: [
        `Third Party Service Providers:
      We may share your information with third parties who assist us in operating our Website, conducting our business, or servicing you.`,
        ` Legal Obligations:
      We may disclose personal information if required to do so by law or in response to valid requests by public authorities.`,
      ],
    },
    {
      heading: "Third-Party Websites",
      name: [
        `Linked Sites:
      Users may find content on our Website that links to third-party sites. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Website.`,
      ],
    },
    {
      heading: "Changes to this Privacy Policy",
      name: [
        `Updates:
      Qwikconnect.io has the discretion to update this Privacy Policy at any time. When we do, we will revise the updated date at the bottom of this page.`,
      ],
    },
    {
      heading: "User Consent",
      name: [
        `Acceptance of Terms:
      By using this Website, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Website.`,
      ],
    },
    {
      heading: "Contact Us",
      name: [
        `Questions and Concerns:
      If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
      - Email: privacy@qwikconnect.io`,
      ],
    },
  ];
  return (
    <CustomContainer>
    <div
      style={{
        height: "100%",
        width: "100vw",
      }}
    >
      <Navbar/>
      <div style={{ marginTop: "1.66rem", padding: "0 2rem" , marginBottom:'9rem'}}>
        <LinkBar
          linkArray={[
            { title: "Home", path: "/home" },
            { title: "Privacy Policy", path: "/home/privacy-plolicy" },
          ]}
          showSteps={false}
        />
        <div style={{ marginTop: "3.40rem" }}>
          <CustomAllTypography name={"Privacy Policy"} variant={"h2"} />
        </div>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          {data.map((section, index) => (
            <div
              key={index}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <CustomAllTypography
                name={`${index + 1}. ${section.heading}`}
                variant="h5"
              />
              {section.name.map((item, subIndex) => (
                <div key={subIndex}>
                  <CustomAllTypography
                    name={`${index + 1}.${subIndex + 1} ${item}`}
                    variant="body1"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    </CustomContainer>
  );
};

export default PrivacyPolicy;
