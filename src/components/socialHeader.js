import React from "react"
import { Link } from "gatsby"

const SocialHeader = () => (
    <div className="sticky top-0 z-50 pl-8 pr-8 h-16 flex justify-end items-center bg-secondary text-white font-bold text-xs tracking-widest shadow-lg">
        <div>
            <ul className="h-full flex justify-between items-center">
                <li className="mr-2">
                    <Link to="https://www.facebook.com/ottosmetmeer/" className="flex items-center bg-black p-2 border border-primary">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </span>
                        <span className="pl-2 uppercase hidden md:inline">Facebook</span>
                    </Link>
                </li>
                <li>
                    <Link to="https://www.instagram.com/ottosmetmeer/" className="flex items-center bg-black p-2 border border-primary">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </span>
                        <span className="pl-2 uppercase hidden md:inline">Instagram</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)

export default SocialHeader;
