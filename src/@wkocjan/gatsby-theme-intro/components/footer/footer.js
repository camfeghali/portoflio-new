import { bool } from "prop-types";
import React from "react";
import { ProfileType } from "../../types";

const Footer = ({ name, showThemeLogo = true }) => (
    <footer className="bg-front mt-16 pt-8 pb-16">
        <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex justify-center">
            <div className="w-2/3 text-back-light font-header text-xs text-center">
                {/* <b>
                    &copy; {new Date().getFullYear()} {name}.
                </b>{" "}
                All rights reserved. */}
                Made with &hearts; by Camille Feghali
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    name: ProfileType.name,
    showThemeLogo: bool,
};

export default Footer;
