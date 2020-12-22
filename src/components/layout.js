import React from "react"
import SEO from "./seo"
import SocialHeader from "./socialHeader"
import Navigation from "./navigation"
import Main from "./main"
import Footer from "./footer"


const Layout = ({ children }) => {
  return (
    <div className="box-border font-body">
      <SEO lang="nl" />     
      <SocialHeader />
      <Navigation />
      <Main className="">
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout;
