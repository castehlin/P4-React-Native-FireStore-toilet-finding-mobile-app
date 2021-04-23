import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { styles } from "./model/Styles";
import StarRating from "./components/StarRating";


const ToiletScreen = (props) => {

    const bs = React.createRef();
    renderHeader = () => (
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
    );   
    
    renderInner = () => (
        <View style = {styles.bottomPanel}>
            <Text style = {styles.toiletTitle}>{props.navigation.getParam('title')}</Text> 
            <Text style = {styles.toiletSubtitle}>{props.navigation.getParam('address')}</Text>
            <View style={styles.hairline}/>
            <Text style = {styles.textSubheading}>Get Directions</Text>
            <Text style = {styles.textSubheading}>Rating: <StarRating ratings={props.navigation.getParam('rating')}/></Text>
            <Text style = {styles.textSubheading}>Reviews: {props.navigation.getParam('reviews')}</Text>
        </View>
    );

    return (
        <View style = {styles.bottomContainer}>
            <BottomSheet 
            ref = {bs}
            snapPoints={[420, 0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1}
            borderRadius={10}
            enabledGestureInteraction={true}
            />
            <TouchableOpacity style = {styles.button}
            onPress={() => bs.current.snapTo(0)}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ToiletScreen;