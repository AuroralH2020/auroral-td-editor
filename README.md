Generate feature module:
```
ng g module features/{module_name} --module=app --routing
```

Generate features component:
```
ng g component features/{module_name}/{component_path}  --module features/{module_path}/{module_name}.module.ts
```

Generate shared component:
```
ng g component shared/{component_path}  --module shared/shared.module.ts
```

Generate core component:
```
ng g component core/components/{component_name}  --module core/core.module.ts
```