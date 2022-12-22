import React from 'react';
import { View, Text, Button,TouchableOpacity ,StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';

    return(
        <View
            style={{
                width:5,
                height:5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) =>(
    <TouchableOpacity
    style={{marginHorizontal:8}}
    {...props}
    >
        <Text
        style={{fontSize:20}}
        >Skip</Text>
    </TouchableOpacity>
);
const Next = ({...props}) =>(
    <TouchableOpacity
    style={{marginHorizontal:8}}
    {...props}
    >
        <Text
        style={{fontSize:20}}
        >Next</Text>
    </TouchableOpacity>
);
const Done = ({...props}) =>(
    <TouchableOpacity
    style={{marginHorizontal:8}}
    {...props}
    >
        <Text
        style={{fontSize:20}}
        >Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (

        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding/create-account.jpg')} />,
                    title: 'Create an Account',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding/choose.png')} />,
                    title: 'Choose a suitable babysitter',
                    subtitle: '',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding/worries.png')} />,
                    title: 'Be free of your worries!',
                    subtitle: '',
                },
            ]}
        />


    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 