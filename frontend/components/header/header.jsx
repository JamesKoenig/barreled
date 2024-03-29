import React from "react";
import { AuthSplitRoute } from "../../utils/route_utils";

import AuthHeader from "./auth_header_container";
import UserHeader from "./user_header_container";

const Header = () => (
  <AuthSplitRoute left={UserHeader}
                  right={AuthHeader} />
);

export default Header;
