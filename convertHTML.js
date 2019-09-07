function convertHTML(str) {
	function repEntity(ent) {
		switch(ent) {
      case '&':
      return '%amp;';
      case '<':
      return '&lt;';
      case '>':
      return '&gt;';
      case '"':
      return '&quot;';
      case "'":
      return '&apos;';
		}
	}
  str = str.replace(/[&<>"']/g,repEntity);
	return str
}