import { TextRotate } from "./TextRotate";

const didYouKnowTips = [
  "Did you know? You can"
].sort(() => Math.random() - 0.5);

export function DidYouKnow() {
  return (
    <div className="w-full flex justify-center">
      <TextRotate
        texts={didYouKnowTips}
        rotationInterval={7000}
        staggerFrom="first"
        staggerDuration={0.01}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        splitBy="words"
        mainClassName="text-[#333333] text-sm text-center w-full"
        splitLevelClassName="justify-center"
        elementLevelClassName="text-center"
      />
    </div>
  );
}
