function toggle (t) {
if (t.name == "closed") {
    t.href = "#shownav";
    t.name = "open";
} else {
    t.href = "#";
    t.name = "closed";
}
}
