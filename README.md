# Barreled
Barreled, a clone of tumblr (barrel finishing is to metals as tumble finishing is to rocks) 

[Live!](http://barreled.herokuapp.com)

### Technologies Used:
* `React` 
* `Redux`
* `React-Router`
* `PostgreSQL`
* `Node.js`
* `Webpack`
* `Sass/Scss` 

# Features

## Fluid, dynamic user interfaces
* animations that pop and draw attention to important information or interactions
* whole-page interfaces that work well on mobile and in desktop

### User Auth
* header & page information dynamically responds to user authentication state
* login fields dynamically centered in the page
* errors animate in and automatically clear when no longer relevant

# Cool code snippets!

## Auth & Router utils
```javascript
/* (...) imports */ 
const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

const Either = (bool, path, Left_Component, Right_Component ) => (
  <Route path={path}
         render={ props => (
                    bool ? (<Left_Component  {...props} />)
                         : (<Right_Component {...props} />)
                )} />
);

const AuthSplit = ( { loggedIn, path, left: Left, right: Right } ) =>
    Either(loggedIn, path, Left, Right);

const Auth = ({ loggedIn, path, component: Component }) =>
  AuthSplit({ loggedIn, path, left: (<Redirect to="/"/>), right: Component });

const Protected = props =>
  Auth( Object.assign({},props,{ loggedIn: !props.loggedIn }) );

export const AuthSplitRoute = withRouter(connect(mSTP)(AuthSplit));
/* (...) other exports of <component>Route */
```
based heavily on concepts from Haskell like `maybe` and `either`, these route utils made implementing conditional routing (especially based on authentication) very easy, ex, in the Header:
```javascript
export default () => (
  <AuthSplitRoute left={UserHeader} 
                  right={AuthHeader} />
);
```


## Animations!
### Rainbow effect:
```css
@keyframes rainbow {
    0%     {background-color:red;   }
    14.29% {background-color:orange;}
    28.57% {background-color:yellow;}
    42.86% {background-color:green; }
    57.14% {background-color:blue;  }
    71.43% {background-color:indigo;}
    85.71% {background-color:violet;}
    100%   {background-color:red;   }
}

.logo-char-animation:hover {
    animation:rainbow 1s linear infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
```
Rainbow effect on hover that easily and portably affects any text element with the `.logo-char-animation` class.
### error slide-out
```css
/* ... */
   animation: slide .25s ease-out;
}

@keyframes slide {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}
```
alongside the `overflow: hidden` rule, this has any error slide calmly into existence as it's mounted. 