import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Button } from '@patternfly/react-core/dist/esm/components/Button/Button';
import { EmptyState, EmptyStateVariant } from '@patternfly/react-core/dist/esm/components/EmptyState/EmptyState';
import { EmptyStateIcon } from '@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon';
import { EmptyStateBody } from '@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody';
import { EmptyStateSecondaryActions } from '@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateSecondaryActions';
import { Bullseye } from '@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye';
import { Title } from '@patternfly/react-core/dist/esm/components/Title/Title';
import { Spinner } from '@patternfly/react-core/dist/esm/components/Spinner/Spinner';

const LoadingStep = ({ onClose, customText, cancelTitle, description }) => (
  <Bullseye>
    <EmptyState variant={EmptyStateVariant.full} className="pf-u-mt-4xl">
      <EmptyStateIcon icon={Spinner} className="pf-u-mb-0" />
      <Title headingLevel="h2" size="xl" className="pf-u-mt-xl">
        {customText}
      </Title>
      {description && <EmptyStateBody className="ins-c-sources__wizard--step-text">{description}</EmptyStateBody>}
      {onClose && (
        <EmptyStateSecondaryActions className="pf-u-mt-xl">
          <Button variant="link" onClick={onClose}>
            {cancelTitle}
          </Button>
        </EmptyStateSecondaryActions>
      )}
    </EmptyState>
  </Bullseye>
);

LoadingStep.propTypes = {
  onClose: PropTypes.func,
  customText: PropTypes.node,
  cancelTitle: PropTypes.node,
  description: PropTypes.node,
};

LoadingStep.defaultProps = {
  customText: <FormattedMessage id="wizard.loadingText" defaultMessage="Loading, please wait." />,
  cancelTitle: <FormattedMessage id="wizard.cancelText" defaultMessage="Cancel" />,
};

export default LoadingStep;
