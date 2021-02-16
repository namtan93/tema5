import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

import SiteNavigation from '../../components/SiteNavigation';
import PageTitle from '../../components/PageTitle';
import Container from '../../components/Container';
import PostLink from '../../components/PostLink';


function BlogLists() {
    const [pageData, setPageData] = useState(null);
    
    useEffect(() => {
        const client = new Cosmic();
        const bucket  = client.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });
        bucket.getObjects({
            type: 'blog-posts',
            limit: 5,
            props: 'slug,title,content,metadata',
            sort: '-created_at'
        })
        .then(data => {
            setPageData(data);
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
                <Container as='main'>
                    <PageTitle>Recommendend Places</PageTitle>
                    {pageData.objects.map(item => {
                        return (
                            <PostLink 
                                url={`/blogs/${item.slug}`}
                                title={item.title}
                                date={`28.01.2021`}
                                key={item.slug}
                            />
                        );
                    })}
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

export default BlogLists;