import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { Dropdown } from '@patternfly/react-core/dist/esm/components/Dropdown/Dropdown';
import { DropdownItem } from '@patternfly/react-core/dist/esm/components/Dropdown/DropdownItem';
import { KebabToggle } from '@patternfly/react-core/dist/esm/components/Dropdown/KebabToggle';

import { replaceRouteId, routes } from '../../Routes';
import { useSource } from '../../hooks/useSource';
import { useHasWritePermissions } from '../../hooks/useHasWritePermissions';

const SourceKebab = () => {
  const [isOpen, setOpen] = useState(false);
  const intl = useIntl();
  const { push } = useHistory();
  const source = useSource();
  const hasRightAccess = useHasWritePermissions();

  const tooltip = intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.',
  });

  const disabledProps = {
    tooltip,
    isDisabled: true,
    className: 'ins-c-sources__disabled-drodpown-item',
  };

  return (
    <Dropdown
      toggle={<KebabToggle onToggle={() => setOpen(!isOpen)} id="toggle-id-6" />}
      isOpen={isOpen}
      isPlain
      position="right"
      dropdownItems={[
        <DropdownItem
          {...(!hasRightAccess && disabledProps)}
          key="rename"
          onClick={() => push(replaceRouteId(routes.sourcesDetailRename.path, source.id))}
        >
          {intl.formatMessage({
            id: 'detail.rename.button',
            defaultMessage: 'Rename',
          })}
        </DropdownItem>,
        <DropdownItem
          {...(!hasRightAccess && disabledProps)}
          key="remove"
          onClick={() => push(replaceRouteId(routes.sourcesDetailRemove.path, source.id))}
        >
          {intl.formatMessage({
            id: 'detail.remove.button',
            defaultMessage: 'Remove',
          })}
        </DropdownItem>,
      ]}
    />
  );
};

export default SourceKebab;
