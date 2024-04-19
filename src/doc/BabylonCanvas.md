 Wrap your components inside a ```<BabylonProvider>``` and use ```<BabylonCanvas>``` to specify where the rendering will occur.

 ```tsx
 export default function App() {
  return <Grid>
    <BabylonProvider> // Allow all children components to use babylon hooks
      <Grid>
        <Item>
          <BabylonCanvas /> // Rendering Canvas
        </Item>
      ...
        <Item>
          <MyComponentUsingBabylon /> // Mixed React / Babylon component
        </Item>
      </Grid>
    </BabylonProvider>
  </Grid>
 }
```