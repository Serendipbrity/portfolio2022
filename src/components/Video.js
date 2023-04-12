// Import the Cloudinary classes. 
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

const myImage = new CloudinaryImage('sample', {cloudName: 'dcas5qk2w'}).resize(fill().width(100).height(150));


  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )