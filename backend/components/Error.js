import React from 'react';
import { strings as commonStrings } from '../lang/common';
import Link from 'next/link';

import styles from '../styles/error.module.css';

export default function Error({ message, style, homeLink }) {

	return (
		<div style={style}>
			<div className={styles.error}>
				<span className={styles.message}>{message || commonStrings.GENERIC_ERROR}</span>
			</div>
			{homeLink && <p><Link href='/'><a>{commonStrings.GO_TO_HOME}</a></Link></p>}
		</div>
	);
}
