import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {ScreenHeaderBtn} from '../components/common/header/ScreenHeaderBtn';
import Welcome from "../components/home/welcome/Welcome";

import { COLORS, icons, images, SIZES } from '../constants';

const Home = () => {
    return (
        <SafeAreaView>

            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible:false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: ()=> (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle:""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex:1,
                        padding:SIZES.medium
                    }}
                >
                    <Welcome/>
                </View>
            </ScrollView>
            <Text>Hello</Text>
        </SafeAreaView>
    )
}


export default Home