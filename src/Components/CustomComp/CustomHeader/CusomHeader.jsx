import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import { wp, hp, colors, fontSize, fontFamily, radius } from '../../constant';
import Vector from '../../assets/SVG/Vector.svg';
import Searchicon from '../../assets/SVG/Searchicon.svg';
import Heart from '../../assets/SVG/Heart.svg';
import Scan from '../../assets/SVG/Scan.svg';
import Message1 from '../../assets/SVG/Message1.svg';
import Filter from '../../assets/SVG/Filter.svg';

const CustomHeader = ({
  type = 'header',
  title,
  placeholder,
  showBackButton = true,
  showSearchIcon = false,
  showFilterIcon = false,
  showHeartIcon = false,
  showChatIcon = false,
  showScanIcon = false,
  showProfileImage = false,
  profileImageSource,
  customImage,
  statusBadge,
  onBackPress,
  onFilterPress,
  onHeartPress,
  onChatPress,
  onScanPress,
  onProfilePress,
  onSearchChange,
  searchValue,
  backgroundColor = colors.white,
  titleColor = colors.Black,
  style,
}) => {
  const renderBackButton = () => {
    if (!showBackButton) return null;
    return (
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Vector height={hp(4)} width={wp(4)} />
      </TouchableOpacity>
    );
  };
  const renderTitle = () => {
    if (type === 'search') {
      return (
        <View style={styles.searchContainer}>
          {showSearchIcon && (
            <View style={styles.searchIconContainer}>
              <Searchicon height={hp(3)} width={wp(6)} />
            </View>
          )}
          <TextInput
            style={[styles.searchInput, { color: titleColor }]}
            placeholder={placeholder || 'Search'}
            placeholderTextColor={colors.textColor}
            value={searchValue}
            onChangeText={onSearchChange}
          />
          {customImage && <View>{customImage}</View>}
        </View>
      );
    }

    if (type === 'profile') {
      return (
        <View style={styles.profileTitleContainer}>
          <Text style={styles.profileTitle}>{title}</Text>
        </View>
      );
    }

    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {statusBadge && (
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{statusBadge}</Text>
          </View>
        )}
      </View>
    );
  };

  const renderRightActions = () => {
    return (
      <View style={styles.rightActions}>
        {showFilterIcon && (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onFilterPress}
          >
            <Filter height={hp(4)} width={wp(4)}/>
          </TouchableOpacity>
        )}
        {showChatIcon && (
          <TouchableOpacity style={styles.actionButton} onPress={onChatPress}>
            <Message1 />
          </TouchableOpacity>
        )}
        {showScanIcon && (
          <TouchableOpacity style={styles.actionButton} onPress={onScanPress}>
            <Scan height={hp(4.5)} width={wp(4.5)} />
          </TouchableOpacity>
        )}
        {showHeartIcon && (
          <TouchableOpacity style={styles.actionButton} onPress={onHeartPress}>
            <Heart height={hp(5)} width={wp(5)} />
          </TouchableOpacity>
        )}
        {showProfileImage && (
          <TouchableOpacity
            style={styles.profileButton}
            onPress={onProfilePress}
          >
            <View style={styles.profileImageContainer}>
              {profileImageSource ? (
                <Image
                  source={profileImageSource}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              ) : (
                <View></View>
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <View style={styles.content}>
        {renderBackButton()}
        {renderTitle()}
        {renderRightActions()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: wp(4),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    width: wp(9),
    height: wp(9),
    borderRadius: radius.radius2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
  },
  titleContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontSize: fontSize.mediumStatusSize,
    color: colors.forgettxtcolor,
    fontWeight: '600',
    textAlign: 'center',
    marginRight:wp(4)
  },
  statusBadge: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    borderRadius: radius.radius2,
    backgroundColor: colors.lightBlue,
  },
  statusText: {
    color: colors.primaryColor,
    fontSize: fontSize.regSmall,
    fontWeight: '400',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: radius.radius3,
    paddingHorizontal: wp(4),
    marginHorizontal: wp(2),
  },
  searchIconContainer: {
    marginRight: wp(3),
  },
  searchInput: {
    flex: 1,
    fontSize: fontSize.avgSmall,
    fontFamily: fontFamily.DMreg,
    color: colors.Black,
  },
  customImage: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    width: wp(10),
    height: wp(10),
    borderRadius: radius.radius2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(2),
    backgroundColor: colors.lightGray,
  },
  profileButton: {
    marginLeft: wp(2),
  },
  profileImageContainer: {
    width: wp(8),
    height: wp(8),
    borderRadius: radius.radius2,
    overflow: 'hidden',
  },
  profileImage: {
    height: hp(4),
    width: wp(8),
  },
  profileTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: wp(2),
  },
  profileTitle: {
    fontSize: fontSize.mediumStatusSize,
    color: colors.forgettxtcolor,
    fontWeight: '600',
  },
});
export default CustomHeader;
