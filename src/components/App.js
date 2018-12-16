import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

import "./App.css";

const App = ({
  currentUser,
  currentChannel,
  isPrivateChannel,
  userPosts,
  primaryColor,
  secondaryColor
}) =>  (
  <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
    <ColorPanel
      currentUser={currentUser}
      key={currentUser && currentUser.name}
    />
    <SidePanel
      currentUser={currentUser}
      key={currentUser && currentUser.id}
      primaryColor={primaryColor}
    />
    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages
        isPrivateChannel={isPrivateChannel}
        currentUser={currentUser}
        currentChannel={currentChannel}
        key={currentChannel && currentChannel.id}
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <MetaPanel
        userPosts={userPosts}
        currentChannel={currentChannel}
        isPrivateChannel={isPrivateChannel}
        key={currentChannel && currentChannel.id}
      />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor
});
export default connect(mapStateToProps)(App);
