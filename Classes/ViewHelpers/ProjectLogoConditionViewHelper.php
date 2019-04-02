<?php

namespace Gjz18\TmplGjz\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class ProjectLogoConditionViewHelper extends AbstractViewHelper {

	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array', 'array', 'The array to extract the value from', TRUE);
		$this->registerArgument('key', 'string', 'The key to extract the value for', TRUE);
	}


	/**
	 * @return string
	 */
	public function render() {
		$result = NULL;

		if ($this->arguments['array']) {
			if (array_key_exists($this->arguments['key'], $this->arguments['array'])) {
				$result = $this->arguments['array'][$this->arguments['key']];
			}
		}
		
		$result = strtolower($result);
		
		if ( (strpos($result, "idz") !== FALSE) ) {
			$imagePath = "/fileadmin/user_upload/Bilder/ProjektLogoIDZ.jpg";
			return $imagePath;
		}
		elseif ( (strpos($result, "idrz") !== FALSE) ) {
			$imagePath = "/fileadmin/user_upload/Bilder/ProjektLogoIDRZ.jpg";
			return $imagePath;
		}
		elseif ( (strpos($result, "gjz") !== FALSE) ) {
			$imagePath = "/fileadmin/user_upload/Bilder/ProjektLogoGJZ.jpg";
			return $imagePath;
		}
		
	}
  
}
?>
