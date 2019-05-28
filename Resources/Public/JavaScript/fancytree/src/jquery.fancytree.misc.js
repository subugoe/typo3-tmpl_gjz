/*******************************************************************************
 * Expand all nodes
 */
function expandAllNodes(){
  var tree = $("#classificationTree").fancytree("getTree");
  tree.visit(function(node){
    node.setExpanded();
  });
  return false;
};




/*******************************************************************************
 * Collapse all nodes
 */
function collapseAllNodes(){
  var tree = $("#classificationTree").fancytree("getTree");
  tree.visit(function(node){
    node.setExpanded(false);
  });
  return false;
};




/*******************************************************************************
 * Reset the filter
 */
function resetFilter(){
  $("input[name=search]").val("");
  document.getElementById("matches").style.visibility = "hidden";
  var tree = $("#classificationTree").fancytree("getTree");
  
  /** Code to keep selection but collapse whole tree */
  tree.clearFilter();
  clearExpandStatus();
  tree.visit(function(node){
    node.setExpanded(false);
  });
  
  /** Code to keep selected nodes' parents expanded to have selected nodes visible */
  /*var selectedNodes = tree.getSelectedNodes();
  var selectedNodeKeys = $.map(selectedNodes, function(node){
    return node.key;
  });
  tree.clearFilter();
  clearExpandStatus();
  if ("undefined" !== typeof selectedNodes[0]) {
    tree.visit(function(node){
      if (selectedNodeKeys.includes(node.key)) {
        node.setSelected(true);
        node.makeVisible();
        node.parent.setExpanded();
      }
    });
  } else {
  }*/
  
  $("input[name=search]").focus();
  return false;
};




/*******************************************************************************
 * Restart the filter on keystroke
 */
function resetFilterKeystroke(){
  //$("input[name=search]").val("");
  document.getElementById("matches").style.visibility = "hidden";
  var tree = $("#classificationTree").fancytree("getTree");
  var selectedNodes = tree.getSelectedNodes();
  var selectedNodeKeys = $.map(selectedNodes, function(node){
    return node.key;
  });
  tree.clearFilter();
  clearExpandStatus();
  $("input[name=search]").focus();
  return false;
};





/*******************************************************************************
 * Collapse all nodes
 */
function clearExpandStatus() {
  var tree = $("#classificationTree").fancytree("getTree");
  tree.visit(function(node){
    node.setExpanded(false);
  });
  $("input[name=search]").focus();
}




/*******************************************************************************
 * Reset the selection tools sidebar
 */
function resetSelection(){
  var tree = $("#classificationTree").fancytree("getTree");
  $("input[name=search]").val("");
  document.getElementById("matches").style.visibility = "hidden";
  tree.clearFilter();
  
  tree.visit(function(node){
    node.setSelected(false);
    node.setExpanded(false);
  });
  
  selectionTools.innerHTML = "<span style=\"padding: 5px 0 0 0; float:left;\">0 Systemstellen ausgewählt</span>";
  echoSelection.innerHTML = "";
  document.getElementById("selectionFurtherFacetedContainer").style.visibility = "hidden";
  $("input[name=search]").focus();
  return false;
};




/*******************************************************************************
 * Background search for resulting filter matches if keys would lead to results
 */
function bgSearchMatches(){
  var tree = $("#classificationTree").fancytree("getTree");
  var match = $("input[name=search]").val();
  var selectedNodes = tree.findAll(match);
  var selectedNodeKeys = $.map(selectedNodes, function(node){
    return node.key;
  });
  var backgroundQueryStringPart = "\"" + selectedNodeKeys[0] + "\"";
  if (selectedNodeKeys.length > 1) {
    for (i=1; i<selectedNodeKeys.length; i++) {
      backgroundQueryStringPart += "+OR+" + "\"" + selectedNodeKeys[i] + "\"";
    }
  }
  bgQueryUrl = "http://134.76.20.176:8080/solr/adw/select?q=pd045Q01sa:(" + backgroundQueryStringPart + ")&rows=0&wt=xml&indent=true";
  bgQueryUrlEncoded = encodeURI(bgQueryUrl);
  $.post("/typo3conf/ext/tmpl_gjz/Classes/ViewHelpers/dynBackgroundQueryHitCountViewHelper.php", {myUrl : bgQueryUrlEncoded}, function(data) {
    if (data == "0") {
      document.getElementById("btnPassSelectionKeys").title = "Auswahl nicht möglich, denn keines der Filter-Matches führt zu einem Treffer bei einer Datenbanksuche";
      document.getElementById("btnPassSelectionKeys").disabled = true;
    } else {
      document.getElementById("btnPassSelectionKeys").title = "alle Filter-Matches mit Datenbankeinträgen zur Auswahl hinzufügen";
      document.getElementById("btnPassSelectionKeys").disabled = false;
    }
  });
}




/*******************************************************************************
 * Add keys of filter matches to selection
 */
function selectMatches(){
    var tree = $("#classificationTree").fancytree("getTree");
    var match = $("input[name=search]").val();
    var newSelectedNodes = tree.findAll(match);
    var newSelectedNodeKeys = $.map(newSelectedNodes, function(node){
      return node.key;
    });
    var prevSelectedNodes = tree.getSelectedNodes();
    var prevSelectedNodeKeys = $.map(prevSelectedNodes, function(node){
      return node.key;
    });
    tree.visit(function(node){
      if (newSelectedNodeKeys.includes(node.key)) {
        node.setSelected(true);
      } else if (prevSelectedNodeKeys.includes(node.key)) {
        node.setSelected(true);
      } else {
        node.setSelected(false);
      }
    });
    document.getElementById("btnSearchInit").value = "";
    $("input[name=search]").focus();
    setTimeout(bgSearch(), 10);
    return false;
};




/*******************************************************************************
 * Background search for selected node keys
 */
function bgSearch(){
  var tree = $("#classificationTree").fancytree("getTree");
  var selectedNodes = tree.getSelectedNodes();
  var selectedNodeKeys = $.map(selectedNodes, function(node){
    return node.key;
  });
  var backgroundSelOperation = $("input[name=searchOpRadios]:checked").val();
  if ("undefined" === typeof backgroundSelOperation) {
    backgroundSelOperation = "OR";
  }
  if (backgroundSelOperation == "ODER") {
    backgroundSelOperation = "OR"
  }
  if (backgroundSelOperation == "UND") {
    backgroundSelOperation = "AND";
  }
  var backgroundQueryStringPart = "\"" + selectedNodeKeys[0] + "\"";
  if (selectedNodeKeys.length > 1) {
    for (i=1; i<selectedNodeKeys.length; i++) {
      backgroundQueryStringPart += "+" + backgroundSelOperation + "+" + "\"" + selectedNodeKeys[i] + "\"";
    }
  }
  bgQueryUrl = "http://134.76.20.176:8080/solr/adw/select?q=pd045Q01sa:(" + backgroundQueryStringPart + ")&rows=0&wt=xml&indent=true";
  bgQueryUrlEncoded = encodeURI(bgQueryUrl);
  bgInitiate(bgQueryUrlEncoded);
  /** Test: Additional classification terms as faceted list */
  /*
  bgQueryFacetsUrl = "http://134.76.20.176:8080/solr/adw/select?q=pd045Q01sa:(" + backgroundQueryStringPart + ")&rows=0&wt=xml&indent=true&facet=true&facet.query=pd045Q01sa:(" + backgroundQueryStringPart + ")&facet.field=pd045Q01s9";
  bgQueryFacetsUrlEncoded = encodeURI(bgQueryFacetsUrl);
  $.post("/typo3conf/ext/tmpl_gjz/Classes/ViewHelpers/dynBackgroundQueryHitCountFacetsViewHelper.php", {myFacetUrl : bgQueryFacetsUrlEncoded}, function(data) {
    selectionFurtherFaceted.innerHTML = data;
  });
  */
  return false;
};




function bgInitiate(bgQueryUrlEncoded){
  $.post("/typo3conf/ext/tmpl_gjz/Classes/ViewHelpers/dynBackgroundQueryHitCountViewHelper.php", {myUrl : bgQueryUrlEncoded}).done(function(data) {
    if (document.getElementsByName("btnSearchInit").length == 0) {
    } else {
      if (data == 0) {
        document.getElementById("btnSearchInit").value = "0 Einträge in Datenbank";
        document.getElementById("btnSearchInit").title = "keine Datenbanksuche möglich";
        document.getElementById("btnSearchInit").disabled = true;
      } else if (data == 1) {
        document.getElementById("btnSearchInit").value = "1 Eintrag anzeigen";
        document.getElementById("btnSearchInit").title = "Datenbanksuche starten";
        document.getElementById("btnSearchInit").disabled = false;
      } else {
        document.getElementById("btnSearchInit").value = data + " Einträge anzeigen";
        document.getElementById("btnSearchInit").title = "Datenbanksuche starten";
        document.getElementById("btnSearchInit").disabled = false;
      }
    }
  });
  return false;
};




/*******************************************************************************
 * Start search with selected node keys in new window
 */
function searchInit(){
  var tree = $("#classificationTree").fancytree("getTree");
  var selectedNodes = tree.getSelectedNodes();
  var selectedNodeKeys = $.map(selectedNodes, function(node){
    return node.key;
  });
  var selOperation = $("input[name=searchOpRadios]:checked").val();
  if ("undefined" === typeof selOperation) {
    selOperation = "OR";
  }
  if (selOperation == "ODER") {
    selOperation = "OR"
  }
  if (selOperation == "UND") {
    selOperation = "AND";
  }
  var queryStringPart = "\"" + selectedNodeKeys[0] + "\"";
  if (selectedNodeKeys.length > 1) {
    for (i=1; i<selectedNodeKeys.length; i++) {
      queryStringPart += " " + selOperation + " " + "\"" + selectedNodeKeys[i] + "\"";
    }
  }
  window.open(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/startseite/?tx_find_find[q][Systematische+Suche]=(' + queryStringPart + ')&tx_find_find[sort]=so_JahrBandSeite+asc&tx_find_find[extended]=1#tx_find', '_blank');
  return false;
};