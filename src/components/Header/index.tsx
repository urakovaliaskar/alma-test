import React from 'react';
import {
    Banner,
    Logo,
    Text
} from '@/styles';

export const Header: React.FC = () => {
    return (
        <div className="header-container">
            <Banner>
                <Logo>
                    <h1 className="title">almà</h1>
                    <Text>
                        Get An Assessment<br />
                        Of Your Immigration Case
                    </Text>
                </Logo>
            </Banner>
            
        </div>
    );
};