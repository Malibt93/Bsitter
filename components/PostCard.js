import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Card, UserInfo, UserImg, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, InteractionText, Divider } from "../styles/FeedStyles";


const PostCard = ({ item }) => {

    commentIcon = item.liked ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
    commentIconColor = item.liked ? '#2e64e5' : '#333';

    likeIcon = item.liked ? 'heart' : 'heart-outline';
    likeIconColor = item.liked ? '#2e64e5' : '#333';
  
    if (item.likes == 1) {
      likeText = '1 Like';
    } else if (item.likes > 1) {
      likeText = item.likes + ' Likes';
    } else {
      likeText = 'Like';
    }
  
    if (item.comments == 1) {
      commentText = '1 Comment';
    } else if (item.comments > 1) {
      commentText = item.comments + ' Comments';
    } else {
      commentText = 'Comment';
    }
    
    return (

        <Card>

            <UserInfo>
                <UserImg source={item.userImg} />
                <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.postTime}</PostTime>
                </UserInfoText>
            </UserInfo>

            <PostText>{item.post}</PostText>
            {item.postImg !== 'none' ? <PostImg source={item.postImg} /> : <Divider />}

            {/* <PostImg source={item.PostImg} /> */}
            <InteractionWrapper>
                <Interaction>
                    <Ionicons name="chatbox-ellipses-outline" size={25} />
                    <InteractionText>Contact</InteractionText>
                </Interaction>

                <Interaction active={item.liked}>
                    <Ionicons name={commentIcon} size={25} color={commentIconColor} />
                    <InteractionText active={item.liked}>{commentText}</InteractionText>
                </Interaction>
            </InteractionWrapper>

        </Card>
    );
};

export default PostCard;