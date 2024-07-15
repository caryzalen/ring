import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: '<YOUR_API_TOKEN>'
   });
   const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
   const session = await cameraKit.createSession({ liveRenderTarget });

   const mediaStream = await navigator.mediaDevices.getUserMedia({
    video:{
      facingMode:'user'
    }
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '<3890fd7e-49be-496a-ab5f-7389b03d7a68>',
    '<13df7fc9-e5ac-4654-874b-bcf622e7c9d5>'
  );
  await session.applyLens(lens);
  
})();  