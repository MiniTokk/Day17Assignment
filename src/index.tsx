import React from 'react';
import { View, Text } from 'react-native';

import Sections from './screens/sections';
import { NavigationProps } from './types';

const Index: React.FC<NavigationProps> = props => {
    const { navigation } = props;

    return (
        <View style={{ flex: 1 }}>
            <Sections navigation={navigation} />
        </View>
    );
}

export default Index;