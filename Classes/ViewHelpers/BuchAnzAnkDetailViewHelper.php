<?php

namespace Gjz18\TmplGjz\ViewHelpers;

/**
 * View Helper to return "anz" or "ank" if "Buchanzeige" OR "Buchankündigung".
 */
class BuchAnzAnkDetailViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {


	/**
	 * Registers own arguments.
	 */
	public function initializeArguments() {
		parent::initializeArguments();
		$this->registerArgument('array0', 'array', 'The array0 to extract the value from', TRUE);
		$this->registerArgument('array1', 'array', 'The array1 to extract the value from', TRUE);
		$this->registerArgument('array2', 'array', 'The array2 to extract the value from', TRUE);
		$this->registerArgument('array3', 'array', 'The array3 to extract the value from', TRUE);
		$this->registerArgument('array4', 'array', 'The array4 to extract the value from', TRUE);
		$this->registerArgument('array5', 'array', 'The array5 to extract the value from', TRUE);
		$this->registerArgument('array6', 'array', 'The array6 to extract the value from', TRUE);
		$this->registerArgument('array7', 'array', 'The array7 to extract the value from', TRUE);
		$this->registerArgument('array8', 'array', 'The array8 to extract the value from', TRUE);
		$this->registerArgument('array9', 'array', 'The array9 to extract the value from', TRUE);
	}


	/**
	 * @return boolean
	 */
	public function render() {
		$erg = NULL;
		$result = NULL;

		$possibleArrays = array('array0', 'array1', 'array2', 'array3', 'array4', 'array5', 'array6', 'array7', 'array8', 'array9');

		foreach ($possibleArrays as $pa => $vpa) {
			if ($this->arguments[$vpa]) {
				if (array_key_exists('0', $this->arguments[$vpa])) {
					if ((strpos($this->arguments[$vpa][0], "000001090") !== FALSE)) {
						$erg = "ank";
						return $erg;
					}
					if ((strpos($this->arguments[$vpa][0], "000001104") !== FALSE)) {
						$erg = "anz";
						return $erg;
					}
				}
			}
		}

		return $erg;
	}

}

?>