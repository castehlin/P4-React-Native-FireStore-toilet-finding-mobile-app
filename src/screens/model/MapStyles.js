import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

import { width, CARD_HEIGHT, CARD_WIDTH } from "./Constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007965",
    flex: 1,
    zIndex: -1,
  },
  textInputContainer: {
    position: "absolute",
    paddingVertical: 30,
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  searchContainer: {
    position: 'relative',
    height: 20,
    paddingTop: 40,
    flexGrow: 0,
    flexShrink: 0
  }, 
  textInput: {
    position: "absolute",
    height: -25,
    borderRadius: 5,
    paddingVertical: 30,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  searchBox: {
    position: "absolute",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 25,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  searchBoxText: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  searchHere: {
    position: "absolute",
    bottom: 80,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 25,
    marginLeft: 20,
    padding: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  searchHereText: {
    color: "#385c59",
  },
  locationButton: {
    marginRight: 50,
    marginLeft: 10,
    width: 38,
    height: 38,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  circleButton: {
    marginRight: 5,
    marginLeft: 5,
    width: 38,
    height: 38,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  locationButtonContainer: { 
    position: "absolute",
    flexDirection: "row",
    top: 100,
    paddingHorizontal: 10,
    paddingRight: 20,
    alignSelf: "flex-start",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 100,
    paddingHorizontal: 10,
    paddingRight: 20,
    alignSelf: "flex-end",
  },
  button: {
    padding: 20,
  },
  bottomContainer: {
    position: "absolute",
    flex: 1,
  },
  modeCircleButton: {
    marginRight: 10,
    marginLeft: 10,
    width: 38,
    height: 38,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  modeButton: {
    padding: 60,
  },
  ModeBottomContainer: {
    position: "absolute",
    flex: 1,
  },
  toiletTitle: {
    padding: 15,
    fontSize: 22,
    color: "#fff"
  },
  toiletSubtitle: {
    paddingBottom:10,
    paddingLeft: 15,
    fontSize: 14,
    color: "#fff",
  },
  toiletDistance: {
    fontSize: 14,
    color: "#ddd",
  },
  directionsButton: {
    right: 0,
    marginRight: 5,
    marginLeft: 5,
    width: 150,
    height: 38,
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#f98404"
  },
  hairline: {
    backgroundColor: "#A2A2A2",
    height: 2,
    width: 500,
  },
  ratings: {
    paddingTop: 15,
    flexDirection: "row",
    paddingLeft: 30,
    fontSize: 18,
    color: "#777",
  },
  bottomPanel: {
    backgroundColor: "#FFFFFF",
    paddingTop: 5,
    height: "100%",
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  chipsScrollView: { //scrollview
    position: "relative",
    top: 160,
    marginBottom: -30
  },
  listContainer: { 
    position: "relative",
    top: 10,
    marginBottom: -150
  },
  reviewTextInputContainer: {
    position: "relative",
    top: 100,
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    //borderWidth : 1.0,
    //borderColor: 'grey'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    position: "relative",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#007965",
    padding: 20,
    justifyContent: "space-between",
  },
  footerButton: {
    paddingHorizontal: 50,
  },
  loadScreen: {
    flex: 1,
    backgroundColor: "#75CFB8",
  },
  buttonTwo: {
    //using for directions screen
    backgroundColor: "#788eec",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  reviewButton: {
    //using for directions screen
    backgroundColor: "#007965",
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    marginBottom: 5,
    height: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  reviewButtonTitle: {
    color: "white",
    fontWeight: "bold",
  },
  icon: {
    top: 200,
    position: "relative",
    alignSelf: "center",
    height: 292,
    width: 261,
  },
  header: { 
    flex: 1,
    backgroundColor: "#009688", 
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:5,
    alignSelf: 'stretch',
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
