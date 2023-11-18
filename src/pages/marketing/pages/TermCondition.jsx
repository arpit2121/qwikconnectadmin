import React from 'react'
import MarketingNavbar from '../components/MarketingNavbar'
import LinkBar from '../../dashboard/jobposting/LinkBar'
import Navbar from '../../../components/structure/admin/Navbar'
import Footer from '../components/Footer'
import CustomContainer from '../../../components/structure/CustomContainer'
import CustomAllTypography from '../../../components/typography/CustomTypograpgy'

const TermCondition = () => {
  const data = [
    {
      heading: "Introduction",
      name: [`These General Conditions of Use and Contracting (hereinafter, "the General Conditions") govern the access and use of the website accessible through the domain name https://qwikconnect.io and its subdomains (hereinafter, "the Website"), as well as the contracting of goods and/or services through the same. By accessing and using the Website, you acknowledge and agree to abide by these General Conditions. If you do not agree with these General Conditions, please refrain from using the Website.`]
    },
    {
      heading: "User Acceptance",
      name: [`By accepting these General Conditions, you declare:

      a) That you have read, understand, and accept these General Conditions.
      b) That, if you intend to contract any goods and/or services, you have the legal capacity to do so.
      c) That, if acting on behalf of a legal entity, you have the necessary authorization for such purposes.
      d) That you are of legal age.`]
    },
    {
      heading: "Definitions",
      name: [`For the purpose of these General Conditions:
      User: The natural or legal person who accesses the Website and/or contracts with Qwikconnect.io.
      Services: The online one-way interview activity provided by Qwikconnect.io and contracted by the User.
      Service Provider: Qwikconnect.io, the legal entity providing the Services.
      Candidate: The natural person who is interviewed by the User through the Services provided by Qwikconnect.io.`]
    },
    {
      heading: "Rules of Use of the Website",
      name: [`By using the Website, you agree:

      a) Not to use the Website for unlawful or criminal activities that violate third-party rights or applicable legal regulations.
      b) Not to introduce or disseminate content of a racist, xenophobic, pornographic, or terrorist nature, or that violates human rights.
      c) Not to introduce or disseminate harmful software that could damage computer systems.
      d) Not to violate intellectual property rights, patents, trademarks, or copyrights.
      e) Not to impersonate other Users or disseminate false information.
      f) Not to register duplicate accounts without explicit approval from Qwikconnect.io.
      g) Not to register anonymous or generic accounts for non-verified purposes.
      h) Not to conduct market research or competitor analysis using the Website.
      
      You agree to hold Qwikconnect.io harmless against any claims arising from your breach of these rules.`]
    },
    {
      heading: "Web Content and Linked Sites",
      name: [`Qwikconnect.io may provide links to other websites (Linked Sites), but Qwikconnect.io is not liable for their content. The existence of Linked Sites does not imply endorsement by Qwikconnect.io.`]
    },
    {
      heading: "Intellectual and Industrial Property",
      name: [`All content on the Website, including text, images, software, and design, is the intellectual property of Qwikconnect.io or third-party licensors. The User declares that any content submitted is their own and grants Qwikconnect.io rights to use such content.`]
    },
    {
      heading: "Procurement of Services",
      name: [`Main Features of Services

      The main features of the Services are described in the respective section.`,`Service Procurement Procedure

      To subscribe to Services:
      
      Register using the online form.
      Confirm your account via the provided email link.
      Qwikconnect.io retains electronic proof of your purchases.`, `Password

      You are responsible for your password's security. Use under your password is considered your action.`,`Price and Payment Methods

      Prices exclude VAT unless stated otherwise. Payment methods include credit or debit cards.`]
    },
    {
      heading: "Right of Withdrawal",
      name: [`You have a right to withdraw from the contract within fourteen days of service acquisition. This right does not apply to services that have already begun with your consent.`]
    },
    {
      heading: "Complaints and Contact",
      name: [`For complaints, claims, or information requests, contact Qwikconnect.io through the provided channels.`]
    },
    {
      heading: "Invalidity and Applicable Law",
      name: [`Should any clause be invalid, other clauses remain valid. These General Conditions are governed by Spanish law. Disputes will be resolved in the Courts and Tribunals of Barcelona.`]
    }
  ]
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
  )
}

export default TermCondition