document.addEventListener("DOMContentLoaded", function () {
  const skinDropdown = document.getElementById("skin-dropdown");
  const savedSkin = localStorage.getItem("mm-skin");

  // Apply saved skin
  if (savedSkin) {
	document.documentElement.setAttribute("data-skin", savedSkin);
	skinDropdown.value = savedSkin;
  }

  // Listen for skin changes
  skinDropdown.addEventListener("change", function () {
	const selectedSkin = skinDropdown.value;
	document.documentElement.setAttribute("data-skin", selectedSkin);
	localStorage.setItem("mm-skin", selectedSkin);
  });
});
