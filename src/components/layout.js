import React from "react"
import SEO from "./seo"
import SocialHeader from "./socialHeader"
import Navigation from "./navigation"
import Main from "./main"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <div className="box-border font-body flex flex-col min-h-screen">
      <SEO lang="nl" />     
      <SocialHeader />
      <Navigation />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;
