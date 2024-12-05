import { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const videoEditorRef = useRef<any>();

  useEffect(() => {
    init();
  }, []);

  async function init() {
    if (!videoEditorRef.current) {
      return;
    }

    videoEditorRef.current.addEventListener("onReady", handleReady);
  }

  async function handleReady() {
    await videoEditorRef.current!.getEngine();
  }

  return (
    <Box w="100vw" h="100vh">
      {/* @ts-ignore */}
      <rendley-video-editor
        ref={videoEditorRef}
        licensename="test-revot"
        licensekey="C28B6A4E8F75F26929420001"
        theme="dark"
      />
    </Box>
  );
}

export default App;
