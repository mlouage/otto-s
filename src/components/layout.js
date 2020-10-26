import React from "react"
import SEO from "./seo"
import SocialHeader from "./socialHeader"
import Navigation from "./navigation"
import Main from "./main"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <div className="box-border">
      <SEO lang="nl" />     
      <SocialHeader />
      <Navigation />
      <Main className="mx-auto">
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;
