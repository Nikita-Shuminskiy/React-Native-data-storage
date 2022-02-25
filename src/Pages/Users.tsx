import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ApiUserType } from "../Api/Api";
import { getUsersThunk } from "../Bll/ProfileReducer";
import { AppStateType } from "../Bll/Redux_Store";
// @ts-ignore
import avatarDefault from "../Images/userAvatar.png";

const Users = () => {
  const users = useSelector<AppStateType, ApiUserType[]>(
    (state) => state.userReducer.dataUsers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);
  return (
    <View>
      {users.map((user) => {
        return (
          <View>
            <View>
              {/*  <Image
                source={require(user.photos?.small !== null
                  ? user.photos?.small
                  : avatarDefault)}
              />*/}
            </View>
            <Text>
              <Text>Name:</Text>&nbsp;&nbsp;{user.name}
            </Text>
            <Text>
              <Text>Status:</Text>
              &nbsp;&nbsp;{user.status}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Users;
