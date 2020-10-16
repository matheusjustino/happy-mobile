import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanagesDetails from '../pages/OrphanagesDetails';
import SelectMapPosition from '../pages/createOrphanage/SelectMapPosition';
import OrphanageData from '../pages/createOrphanage/OrphanageData';
import Header from '../components/Header';


const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5'} }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap} />
                <Screen
                    name="OrphanagesDetails"
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato" />
                    }}
                    component={OrphanagesDetails}
                />
                <Screen
                    name="SelectMapPosition"
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                    component={SelectMapPosition}
                />
                <Screen
                    name="OrphanageData"
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                    component={OrphanageData}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export default Routes;