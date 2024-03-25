const clearDom = () => {
  content.innerHTML = "";
};

const handleLinks = (component) => {
  clearDom();
  content.appendChild(component());
};

export default handleLinks;
