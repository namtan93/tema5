import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';


import SiteNavigation from '../../components/SiteNavigation';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import StyleBlogPost from '../../components/StyleBlogPosts';

function BlogPost( { match }) {
    const [pageData, setPageData] = useState(null);
    
    useEffect(() => {
        const client = new Cosmic();
        const bucket  = client.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });
        bucket.getObject({
            slug: match.params.slug,
            props: 'title,slug,content,metadata'
        })
        .then(data => {
            //console.log(data);
            setPageData(data.object);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);


    const renderSkeleton = () => {
        return (
            <>
            <p>Laster data...</p>
            </>
        )
    };

    const renderPage = () => {
        return (
            <>
                <SiteNavigation />
                <Container as="main">
                    <PageTitle>{pageData.title}</PageTitle>
                    <StyleBlogPost dangerouslySetInnerHTML={{__html: pageData.content}} />
                </Container>
            </>
        )
    };
    
    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    );
};


export default BlogPost;