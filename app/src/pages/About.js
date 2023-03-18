
export default function About() {
    return (

        <div className="about-header">
            <div className="header">      
                <h1>  About Us </h1>
            </div>
            <div id="bg">
                <img src="richmond.jpg"></img>
            </div>
            <div className="about-body">
                <p2>
                    CoStar Group, Inc. (NASDAQ: CSGP) is the leading provider of commercial real estate information, analytics and online marketplaces. Founded in 1987, CoStar conducts expansive, ongoing research to produce and maintain the largest and most comprehensive database of commercial real estate information.
                </p2>
                <p>
                    CoStar Group's core objective is to provide a rich and comprehensive view of listings across markets to home shoppers. Residential listings miss important information and are not standardized across markets. However, key data points are presented as textual descriptions by listing agents. Currently, a large amount of research resources is devoted to building standardization of data points across markets. an automated system to extract key information from listings descriptions that map to our residential data schema so that we can provide a comprehensive view to home shoppers about a home. Residential listings are missing a lot of important information. However, many of the key data points are present in the listing description. We want to build an automated key information extraction system to extract key information from listings descriptions to enrich the residential data.
                </p>
            </div>
            <div className="about-footer">
                <div className="image">
                    <img src="About.jpg" alt="About Companies"width="100%"/>
                </div>
            </div>
        </div>

    )
}