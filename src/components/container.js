function Container({ children }) {
  return (
    <div
      className={"container mx-auto w-full lg:w-2/4"}
      style={{
        backgroundColor: "white",
        marginTop: 30,
      }}
    >
      {children}
    </div>
  );
}

export default Container;
