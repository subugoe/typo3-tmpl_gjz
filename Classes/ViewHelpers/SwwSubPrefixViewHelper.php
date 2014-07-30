<?php
namespace Gjz18\TmplGjz\ViewHelpers;

class SwwSubPrefixViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
	
	/**
	* Registers own arguments.
	*/
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'string', 'The array to extract the value from', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;
		$httpTitle = NULL;

		if ($this->arguments['array']) {
			$result = $this->arguments['array'];
		}
		
		$titleBeginPos = strpos($result, "/\"");
		$subPrefix = (string)substr($result, 0, $titleBeginPos);
		
		//$subPrefix = $subPrefix." /";
		
		return $subPrefix;
         
    }
  
}
?>